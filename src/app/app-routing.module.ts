import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'addPlayer', component:AddPlayerComponent},
  {path: 'addTeam', component:AddTeamComponent},
  {path: 'addMatch', component:AddMatchComponent},
  {path: 'matches', component:MatchesComponent},
  {path: 'displayPlayer/:id', component:DisplayPlayerComponent},
  {path: 'editPlayer/:id', component:EditPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
