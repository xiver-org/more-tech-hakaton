from os import system

from loguru import logger

__all__ = ("init_db",)

async def init_db() -> None:
    logger.info('Starting DB Initialization')
    system('alembic upgrade head')
    logger.info('DB is initialized')
