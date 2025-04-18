import asyncio
import logging
from typing import List, Tuple
from datetime import datetime, timedelta, timezone
from ..models import AcestreamChannel
from ..extensions import db
from ..scrapers import create_scraper

logger = logging.getLogger(__name__)

class ScrapeWorker:
    """Worker class for executing scraping tasks."""
    
    def __init__(self, max_concurrent: int = 3):
        self.max_concurrent = max_concurrent
        self.semaphore = asyncio.Semaphore(max_concurrent)

    async def execute(self, url: str) -> Tuple[List[Tuple[str, str]], str]:
        """Execute a scraping task for a single URL."""
        async with self.semaphore:
            scraper = create_scraper(url)
            return await scraper.scrape(url)

class ChannelCleanupWorker:
    """Worker class for cleaning up old channels."""
    
    def __init__(self, max_age_days: int = 7):
        self.max_age_days = max_age_days

    async def cleanup_old_channels(self):
        """Remove channels that haven't been seen in a while."""
        cutoff_date = datetime.now(timezone.utc) - timedelta(days=self.max_age_days)
        
        try:
            old_channels = AcestreamChannel.query.filter(
                AcestreamChannel.last_processed < cutoff_date
            ).all()
            
            for channel in old_channels:
                db.session.delete(channel)
            
            db.session.commit()
            logger.info(f"Removed {len(old_channels)} old channels")
            
        except Exception as e:
            logger.error(f"Error during channel cleanup: {e}")
            db.session.rollback()