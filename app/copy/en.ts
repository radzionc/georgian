// This file is generated by app/copy/codegen/utils/generateCopy.ts
import { Copy } from './Copy'

import { injectVariables } from '@georgian/utils/template/injectVariables'

const enCopy: Copy = {
  homePageMetaTagTitle: `Prepare for Georgian Citizenship Exam: Language, Law, History Guides & Practice Tests`,
  homePageTitle: `Master Your Georgian Citizenship Exam with Confidence!`,
  getStarted: `Get Started`,
  createdBy: `Created by`,
  language: `Language`,
  law: `Law`,
  history: `History`,
  georgian: `Georgian`,
  restart: `Restart`,
  testPageTitle: (variables: { category: string }) =>
    injectVariables(`Georgian {{category}} Test`, variables),
  categoryPageTitle: (variables: { category: string }) =>
    injectVariables(`Georgian {{category}} Tickets`, variables),
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
