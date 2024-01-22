// This file is generated by app/copy/codegen/utils/generateCopy.ts
import { Copy } from './Copy'

import { injectVariables } from '@georgian/utils/template/injectVariables'

const kaCopy: Copy = {
  homePageMetaTagTitle: `მოემზადეთ საქართველოს მოქალაქეობის გამოცდისთვის: ენა, სამართალი, ისტორიის სახელმძღვანელო და პრაქტიკული ტესტები`,
  homePageTitle: `დაეუფლეთ საქართველოს მოქალაქეობის გამოცდას თავდაჯერებულად!`,
  getStarted: `Დაიწყე`,
  createdBy: `Შექმნილია მიერ`,
  language: `Ენა`,
  law: `Კანონი`,
  history: `ისტორია`,
  georgian: `ქართული`,
  restart: `Რესტარტი`,
  testPageTitle: (variables: { category: string }) =>
    injectVariables(`ქართული {{category}} ტესტი`, variables),
  categoryPageTitle: (variables: { category: string }) =>
    injectVariables(`ქართული {{category}} ბილეთები`, variables),
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
