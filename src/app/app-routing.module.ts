import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'modalpopup',
    loadChildren: () => import('./modalpopup/modalpopup.module').then( m => m.ModalpopupPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'battle',
    loadChildren: () => import('./battle/battle.module').then( m => m.BattlePageModule)
  },
  {
    path: 'predetail',
    loadChildren: () => import('./predetail/predetail.module').then( m => m.PredetailPageModule)
  },
  {
    path: 'getcoin',
    loadChildren: () => import('./getcoin/getcoin.module').then( m => m.GetcoinPageModule)
  },
  {
    path: 'winner',
    loadChildren: () => import('./winner/winner.module').then( m => m.WinnerPageModule)
  },
  {
    path: 'winnerlist',
    loadChildren: () => import('./winnerlist/winnerlist.module').then( m => m.WinnerlistPageModule)
  },
  {
    path: 'earnwallet',
    loadChildren: () => import('./earnwallet/earnwallet.module').then( m => m.EarnwalletPageModule)
  },
  {
    path: 'coinwallet',
    loadChildren: () => import('./coinwallet/coinwallet.module').then( m => m.CoinwalletPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'quizrule',
    loadChildren: () => import('./quizrule/quizrule.module').then( m => m.QuizrulePageModule)
  },
  {
    path: 'cricketrule',
    loadChildren: () => import('./cricketrule/cricketrule.module').then( m => m.CricketrulePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'performance',
    loadChildren: () => import('./performance/performance.module').then( m => m.PerformancePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
