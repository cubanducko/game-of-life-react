import { useEffect, useState } from "react";

export type UseIntervalResult = {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
};

// In order for this to work, callback must change in every iteration (in order to use fresh data)
// TODO: Think of a better name
// TODO: Make a unit test for the expected usage
export function useInterval(
  callback: () => void,
  ms: number
): UseIntervalResult {
  const [isRunning, setIsRunning] = useState(false);

  const onStart = () => {
    setIsRunning(true);
  };

  const onPause = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;
    if (isRunning) {
      timeoutId = setTimeout(() => callback(), ms);
    }

    return () => clearTimeout(timeoutId);
  }, [callback, isRunning, ms]);

  return {
    isRunning,
    onStart,
    onPause,
  };
}
