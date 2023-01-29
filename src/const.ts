export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Player = '(/player/:id)',
  Error = '/error'
}

export enum GenreFilter {
  AllGenres = '/',
  Comedies = 'Comedies',
  Documentary = 'Documentary',
  Dramas = 'Dramas',
  Horror = 'Horror',
  KidsFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thrillers'
}

export const APIRoute = {
  Films: '/films',
} as const;

export enum NameSpace {
  DataFilms = 'FILMS',
}

export const enum FetchStatus {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Rejected = 'REJECTED',
}

