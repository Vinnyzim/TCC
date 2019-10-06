import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule', canActivate: [LoginGuard]},
  { path: 'cadastro-contratante', loadChildren: './pages/cadastro-contratante/cadastro-contratante.module#CadastroContratantePageModule', canActivate: [LoginGuard] },
  { path: 'perfil-contratante', loadChildren: './pages/home/perfil-contratante/perfil-contratante.module#PerfilContratantePageModule', canActivate: [AuthGuard] },
  { path: 'perfil-contratante/:id', loadChildren: './pages/home/perfil-contratante/perfil-contratante.module#PerfilContratantePageModule', canActivate: [AuthGuard] },
  { path: 'servicos-contratante', loadChildren: './pages/home/servicos-contratante/servicos-contratante.module#ServicosContratantePageModule', canActivate: [AuthGuard]},
  { path: 'avaliacao-pontuacao-contratante', loadChildren: './pages/home/avaliacao-pontuacao-contratante/avaliacao-pontuacao-contratante.module#AvaliacaoPontuacaoContratantePageModule' ,canActivate: [AuthGuard]},
  { path: 'chat-contratante', loadChildren: './pages/home/chat-contratante/chat-contratante.module#ChatContratantePageModule',canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
