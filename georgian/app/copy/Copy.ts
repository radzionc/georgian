// This file is generated by app/copy/codegen/utils/generateCopyType.ts
import { Injector } from '@lib/utils/template/Injector'

export type Copy = {
  introduction: string
  education: string
  origin: string
  signIn: string
  account: string
  work: string
  residence: string
  citizenship: string
  investment: string
  other: string
  youHaveScored: string
  signInToContinue: string
  wipPage: string
  family: string
  privacy: string
  purchasePromptTitle: string
  purchasePromptWithPrice: <R>(
    variables: { price: any },
    inject: Injector<R>,
  ) => R
  purchasePromptContent: string
  continueWithGoogle: string
  continueWithFacebook: string
  emailAddress: string
  continue: string
  terms: string
  yourAccount: string
  signOut: string
  withTermsOfService: string
  withPrivacyPolicy: string
  agreement: <R>(
    variables: { terms: any; privacy: any },
    inject: Injector<R>,
  ) => R
  authTitle: string
  homePageMetaTagTitle: string
  homePageTitle: string
  homePageSubTitle: string
  getStarted: string
  language: string
  law: string
  getInTouch: string
  interview: string
  interviewQuestionsPageTitle: string
  interviewQuestionsPageSubTitle: string
  interviewQuestionPageMetaTagTitle: string
  interviewQuestionPageMetaTagDescription: string
  history: string
  georgian: string
  restart: string
  languageTicketsTitle: string
  lawTicketsTitle: string
  historyTicketsTitle: string
  languageTestPageTitle: string
  lawTestPageTitle: string
  historyTestPageTitle: string
  startTest: string
  markAsLearned: string
  learned: string
  allTickets: string
  completedTickets: string
  testPassed: string
  testFailed: string
  markTest: string
  testCongratulation: <R>(
    variables: { percentage: any },
    inject: Injector<R>,
  ) => R
  scoreToPass: <R>(variables: { percentage: any }, inject: Injector<R>) => R
  completedTicketsTestMin: <R>(
    variables: { count: any },
    inject: Injector<R>,
  ) => R
  homePageMetaTagDescription: string
  categoryPageMetaTagTitle: <R>(
    variables: { category: any },
    inject: Injector<R>,
  ) => R
  categoryPageMetaTagDescription: <R>(
    variables: { category: any },
    inject: Injector<R>,
  ) => R
  categoryTestPageMetaTagTitle: <R>(
    variables: { category: any },
    inject: Injector<R>,
  ) => R
  categoryTestPageMetaTagDescription: <R>(
    variables: { category: any },
    inject: Injector<R>,
  ) => R
}
