// This file is generated by app/copy/codegen/utils/generateCopy.ts
import { Copy } from './Copy'

import { injectVariables } from '@lib/utils/template/injectVariables'

const enCopy: Copy = {
  introduction: `Introduction`,
  education: `Education`,
  origin: `Origin`,
  signIn: `Sign in`,
  account: `Account`,
  work: `Work`,
  residence: `Residence`,
  citizenship: `Citizenship`,
  investment: `Investment`,
  other: `Other`,
  wipPage: `This page is a work in progress.`,
  family: `Family`,
  homePageMetaTagTitle: `Prepare for Georgian Citizenship Exam: Language, Law, History Guides & Practice Tests`,
  homePageTitle: `Master Your Georgian Citizenship Exam with Confidence!`,
  homePageSubTitle: `Ace Tickets in Language, Law and History`,
  getStarted: `Get Started`,
  language: `Language`,
  law: `Law`,
  getInTouch: `Get in Touch`,
  interview: `Interview`,
  interviewQuestionsPageTitle: `Essential Questions for the Georgian Citizenship Interview`,
  interviewQuestionsPageSubTitle: `Explore a curated list of potential questions with example answers and audio recordings to confidently prepare for your Georgian citizenship interview.`,
  interviewQuestionPageMetaTagTitle: `Georgian Citizenship Interview Questions Guide | Prepare for Success`,
  interviewQuestionPageMetaTagDescription: `Master Georgian citizenship interview questions with our comprehensive guide. Get expert tips, example answers, and prepare confidently for your interview.`,
  history: `History`,
  georgian: `Georgian`,
  restart: `Restart`,
  languageTicketsTitle: `Georgian Language Tickets`,
  lawTicketsTitle: `Georgian Law Tickets`,
  historyTicketsTitle: `Georgian History Tickets`,
  languageTestPageTitle: `Georgian Language Test`,
  lawTestPageTitle: `Georgian Law Test`,
  historyTestPageTitle: `Georgian History Test`,
  startTest: `Start Test`,
  markAsLearned: `mark as learned`,
  learned: `learned`,
  allTickets: `All Tickets`,
  completedTickets: `Completed Tickets`,
  testPassed: `You have passed the test!`,
  testFailed: `You have failed the test :(`,
  markTest: `Review this question after the test`,
  testCongratulation: (variables: { percentage: string }) =>
    injectVariables(
      `Congratulations! You've surpassed the {{percentage}} milestone! 🎉 Keep up the great work!`,
      variables,
    ),
  scoreToPass: (variables: { percentage: string }) =>
    injectVariables(`Score {{percentage}} or above to pass!`, variables),
  completedTicketsTestMin: (variables: { count: string }) =>
    injectVariables(
      `You need to mark as completed at least {{count}} tickets to take this test.`,
      variables,
    ),
  homePageMetaTagDescription: `Ace your Georgian Citizenship Exam with our comprehensive study guides, practice tests, and resources tailored for success in Language, Law, and History. Start preparing today!`,
  categoryPageMetaTagTitle: (variables: { category: string }) =>
    injectVariables(
      `Prepare for Georgian Citizenship {{category}} Exam: {{category}} Tickets & Practice Tests`,
      variables,
    ),
  categoryPageMetaTagDescription: (variables: { category: string }) =>
    injectVariables(
      `Ace your Georgian Citizenship {{category}} Exam with our comprehensive study guides, practice tests, and resources tailored for success in {{category}}. Start preparing today!`,
      variables,
    ),
  categoryTestPageMetaTagTitle: (variables: { category: string }) =>
    injectVariables(
      `Test your Georgian Citizenship {{category}} Exam Knowledge`,
      variables,
    ),
  categoryTestPageMetaTagDescription: (variables: { category: string }) =>
    injectVariables(
      `Test your Georgian Citizenship {{category}} Exam knowledge with our {{category}} practice tests. Start preparing today!`,
      variables,
    ),
}

export default enCopy
