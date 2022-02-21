export interface ILogger {
  Log(): void;
}

export class ConsoleLogger implements ILogger {
  Log() {
    console.log('using console logger');
  }
}

export class DbLogger implements ILogger {
    Log() {
      console.log('using console logger');
    }
}
  

export class FileLogger implements ILogger {
    Log() {
      console.log('using console logger');
    }
  }
