// This file is generated by app/copy/codegen/utils/generateCopy.ts
import { Copy } from './Copy'

import { injectVariables } from '@lib/utils/template/injectVariables'

const kaCopy: Copy = {
  introduction: `შესავალი`,
  education: `Განათლება`,
  origin: `წარმოშობა`,
  signIn: `Შებრძანდით`,
  account: `ანგარიში`,
  work: `მუშაობა`,
  residence: `რეზიდენცია`,
  citizenship: `მოქალაქეობა`,
  investment: `ინვესტიცია`,
  other: `სხვა`,
  wipPage: `ეს გვერდი მიმდინარე სამუშაოა.`,
  family: `ოჯახი`,
  homePageMetaTagTitle: `მოემზადეთ საქართველოს მოქალაქეობის გამოცდისთვის: ენა, სამართალი, ისტორიის სახელმძღვანელო და პრაქტიკული ტესტები`,
  homePageTitle: `დაეუფლეთ საქართველოს მოქალაქეობის გამოცდას თავდაჯერებულად!`,
  homePageSubTitle: `Ace ბილეთები ენაში, სამართალში, ისტორიაში`,
  getStarted: `Დაიწყე`,
  language: `Ენა`,
  law: `Კანონი`,
  getInTouch: `Შემეხმიანე`,
  interview: `ინტერვიუ`,
  interviewQuestionsPageTitle: `არსებითი კითხვები საქართველოს მოქალაქეობის ინტერვიუსთვის`,
  interviewQuestionsPageSubTitle: `გამოიკვლიეთ პოტენციური კითხვების კურირებული სია პასუხების მაგალითებით და აუდიო ჩანაწერებით, რათა თავდაჯერებულად მოემზადოთ საქართველოს მოქალაქეობის გასაუბრებისთვის.`,
  interviewQuestionPageMetaTagTitle: `საქართველოს მოქალაქეობის გასაუბრების კითხვები გზამკვლევი | მოემზადეთ წარმატებისთვის`,
  interviewQuestionPageMetaTagDescription: `დაეუფლეთ საქართველოს მოქალაქეობის გასაუბრების კითხვებს ჩვენს ყოვლისმომცველ სახელმძღვანელოსთან ერთად. მიიღეთ ექსპერტთა რჩევები, მაგალითები პასუხები და მოემზადეთ თავდაჯერებულად თქვენი ინტერვიუსთვის.`,
  history: `ისტორია`,
  georgian: `ქართული`,
  restart: `Რესტარტი`,
  languageTicketsTitle: `ქართული ენის ბილეთები`,
  lawTicketsTitle: `ქართული სამართლის ბილეთები`,
  historyTicketsTitle: `საქართველოს ისტორიის ბილეთები`,
  languageTestPageTitle: `ქართული ენის ტესტი`,
  lawTestPageTitle: `საქართველოს სამართლის ტესტი`,
  historyTestPageTitle: `საქართველოს ისტორიის ტესტი`,
  startTest: `ტესტის დაწყება`,
  markAsLearned: `მონიშნე როგორც ნასწავლი`,
  learned: `ისწავლა`,
  allTickets: `ყველა ბილეთი`,
  completedTickets: `დასრულებული ბილეთები`,
  testPassed: `თქვენ გაიარეთ ტესტი!`,
  testFailed: `გამოცდა ჩააბარე :(`,
  markTest: `გადახედეთ ამ კითხვას ტესტის შემდეგ`,
  testCongratulation: (variables: { percentage: string }) =>
    injectVariables(
      `გილოცავ! თქვენ გადააჭარბეთ {{percentage}} ეტაპს! 🎉 განაგრძეთ შესანიშნავი სამუშაო!`,
      variables,
    ),
  scoreToPass: (variables: { percentage: string }) =>
    injectVariables(`ჩასაბარებლად ქულა {{percentage}} ან მეტი!`, variables),
  completedTicketsTestMin: (variables: { count: string }) =>
    injectVariables(
      `თქვენ უნდა მონიშნოთ დასრულებულად მინიმუმ {{count}} ბილეთი ამ ტესტის გასავლელად.`,
      variables,
    ),
  homePageMetaTagDescription: `გაიარეთ თქვენი საქართველოს მოქალაქეობის გამოცდა ჩვენი ყოვლისმომცველი სასწავლო სახელმძღვანელოებით, პრაქტიკული ტესტებით და რესურსებით, რომლებიც მორგებულია ენის, სამართლისა და ისტორიაში წარმატებისთვის. დაიწყეთ მზადება დღესვე!`,
  categoryPageMetaTagTitle: (variables: { category: string }) =>
    injectVariables(
      `მოემზადეთ საქართველოს მოქალაქეობის {{category}} გამოცდისთვის: {{category}} ბილეთები და პრაქტიკული ტესტები`,
      variables,
    ),
  categoryPageMetaTagDescription: (variables: { category: string }) =>
    injectVariables(
      `გაიარეთ თქვენი საქართველოს მოქალაქეობის {{category}} გამოცდა ჩვენი ყოვლისმომცველი სასწავლო სახელმძღვანელოებით, პრაქტიკული ტესტებით და რესურსებით, რომლებიც მორგებულია წარმატებისთვის {{category}}-ში. დაიწყეთ მზადება დღესვე!`,
      variables,
    ),
  categoryTestPageMetaTagTitle: (variables: { category: string }) =>
    injectVariables(
      `შეამოწმეთ თქვენი საქართველოს მოქალაქეობის {{category}} გამოცდის ცოდნა`,
      variables,
    ),
  categoryTestPageMetaTagDescription: (variables: { category: string }) =>
    injectVariables(
      `შეამოწმეთ თქვენი საქართველოს მოქალაქეობის {{category}} გამოცდის ცოდნა ჩვენი {{category}} პრაქტიკული ტესტებით. დაიწყეთ მზადება დღესვე!`,
      variables,
    ),
}

export default kaCopy
