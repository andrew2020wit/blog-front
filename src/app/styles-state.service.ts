import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IStylesState {
  darkAppThemeOn: boolean;
  customLightAppThemeOn: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StylesStateService {
  private _stylesState$ = new BehaviorSubject<IStylesState>({
    darkAppThemeOn: false,
    customLightAppThemeOn: true,
  });
  public stylesState$ = this._stylesState$.asObservable();

  constructor() {}
  setTheme(theme: string): void {
    const state: IStylesState = {
      darkAppThemeOn: false,
      customLightAppThemeOn: false,
    };
    if (theme === 'darkAppThemeOn') {
      state.darkAppThemeOn = true;
    }
    if (theme === 'customLightAppThemeOn') {
      state.customLightAppThemeOn = true;
    }
    this._stylesState$.next(state);
  }
}
