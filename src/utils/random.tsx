export const randomUUID = (): string => {
  let currentTime = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
      const random = (currentTime + Math.random() * 16) % 16 | 0;
      currentTime = Math.floor(currentTime / 16);
      return (char == 'x' ? random : (random & 0x3 | 0x8)).toString(16);
  });
}

export const randomWithinRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
}
