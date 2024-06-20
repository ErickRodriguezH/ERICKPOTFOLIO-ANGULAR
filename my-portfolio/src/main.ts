import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { ExperienceComponent } from './app/experience/experience.component';
import { HomeComponent } from './app/home/home.component';
import { SkillsComponent } from './app/skills/skills.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
