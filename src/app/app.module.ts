import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { BlogComponent } from './components/blog/blog.component';
import { TeamResultComponent } from './components/team-result/team-result.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from "@angular/common/http";
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorldCupComponent,
    ResultComponent,
    NewsComponent,
    BlogComponent,
    TeamResultComponent,
    LoginComponent,
    AdminComponent,
    SignupComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AddMatchComponent,
    MatchesComponent,
    PlayerComponent,
    DisplayPlayerComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(DataService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
