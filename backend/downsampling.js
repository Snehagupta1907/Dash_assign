export const downsampleTimeSeries = (timestamps, profitPercentages, targetLength) => {
    const originalLength = timestamps.length;

    if (originalLength <= targetLength) {
        return { timestamps, profitPercentages };
    }

    const downsamplingFactor = Math.floor(originalLength / targetLength);
    const downsampledTimestamps = [];
    const downsampledProfitPercentages = [];

    for (let i = 0; i < originalLength; i += downsamplingFactor) {
        const intervalStart = i;
        const intervalEnd = Math.min(i + downsamplingFactor, originalLength);

        const meanTimestamp = timestamps[intervalStart];
        const meanProfitPercentage =
            profitPercentages.slice(intervalStart, intervalEnd).reduce((acc, val) => acc + val) / (intervalEnd - intervalStart);

        downsampledTimestamps.push(meanTimestamp);
        downsampledProfitPercentages.push(meanProfitPercentage);
    }

    return { timestamps: downsampledTimestamps, profitPercentages: downsampledProfitPercentages };
};


