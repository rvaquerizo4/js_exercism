export class ArgumentError extends Error {}
export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error("Humidity exceeds acceptable levels!");
  }
}

export function reportOverheating(temperature) {
  if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
  if (temperature === null) {
    throw new ArgumentError("Sensor malfunction!");
  }
}

export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (err) {
    if (err instanceof ArgumentError) {
      actions.alertDeadSensor();
    }
    if (err instanceof OverheatingError) {
      if (err.temperature < 600) {
        actions.alertOverheating();
      }
      if (err.temperature > 600) {
        actions.shutdown();
      }
    }
    if (!(err instanceof ArgumentError) && !(err instanceof OverheatingError)) {
      throw err;
    }
  }
}
