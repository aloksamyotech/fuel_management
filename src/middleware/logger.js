export const logError = (error) => {
    logger.error(`${error.message}\n${error.stack}`);

}