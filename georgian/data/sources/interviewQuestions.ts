import {
  InterviewQuestion,
  InterviewQuestionCategory,
} from '@georgian/entities/InterviewQuestion'

/* Questions to add:
- How long have you been living in Georgia?
- How do you see your future in Georgia?
- What are your views on Georgian history and current affairs?
- What do you appreciate most about Georgian culture?
- Why you decided to move to Georgia?
- გიმსახურიათ თუ არ ჯარში?

Questions to answer
- რატომ გინდათ საქართველოს მოქალაქეობის მიღება?
- მაინც და მაინც ახლა რატომ გადაწყვიტედ მოქალაქეობის მიღება? აქამდე ხომ მშვენივრად ცხოვრობდით.
- თუ მოქალაქეობას ახლა არ მოგანიჭებენ, მაშინ რას გააკეთებთ? 
- თუ მოქალაქეობის შესახებ უარყოფით პასუხს მიიღებთ, მაშინ რა მოხდება?
*/

const job =
  'მე ვარ ინდივიდუალური მეწარმე, ვმუშაობ დისტანციურად პროგრამისტად უცხოურ ტექ კომპანიებში, და ჩემს აპლიკაციებზე'

const answers = {
  name: 'თქვენი სახელი',
  nameAndAge: 'მე ვარ {თქვენი სახელი}, {თქვენი ასაკი} წლის',
  age: 'ოცდაექვსის',
  language:
    'ქართულს ვსწავლობ. ჩემი ცოლი {სახელი} დამეხმარება თარგმანში როცა დამჭირდება',
  placeOfBirth: 'ბელარუსიაში, ქალაქ სვეტლაგორსკში',
  hometown: 'დავიბადე და გავიზარდე სვეტლაგორსკში',
  originAndResidence:
    'სვეტლაგორსკიდან, ვცხოვრობდი ბელორუსიაში და თითქმის ოთხი წელია ვცხოვრობ საქართველოში',
  university:
    'დავამთავრე ბელორუსიის ინფორმატიკისა და რადიოელექტრონიკის სახელმწიფო უნივერსიტეტი',
  universitySubject: 'პროგრამირების განხრით',
  universitySatisfaction: 'დიახ, საინტერესო იყო',
  profession: 'მე ვარ სოფთვეარ დეველოპერი',
  job,
  jobPosition: 'სოფტვეარ დეველოპერის თანამდებობაზე',
  employment: `დიახ, ${job}`,
  relatives: 'დიახ, ჩემი ცოლი და მისი მშობლები',
  currentResidence: 'ამჟამად, ვცხოვრობ თბილისში',
  realEstateOwnership: 'დიახ, მაქვს ბინა თბილისში',
  readAndWrite: 'დიახ, ვიცი',
  languageStatus:
    'ქართულის სერიოზულად  სწავლა დავიწყე მხოლოდ  რვა თვის წინ. რაც საკმარისი არაა ქართული ენის კარგად შესასწავლად.',
  citizenshipMotivation:
    'თითქმის ოთხი წელია საქართველოში ვცხოვრობ და გულწრფელად მიყვარს ეს ქვეყანა. მე და ჩემი ცოლი პირველ შვილს ველოდებით, ქობულეთში საკუთარი სახლი გვაქვს და გვსურს ჩვენი მომავალი საქართველოში გავატაროთ. ასევე, ვგეგმავ მეტ ინვესტიციას საქართველოში და  ჩემი სამეწარმეო საქმიანობის გაგრძელებას. მოქალაქეობის მიღება ჩემთვის დიდი ნაბიჯი იქნება სრული ინტეგრაციისთვის და იმისთვის, რომ წვლილი შევიტანო იმ ქვეყნის წინსვლაში, რომელსაც ახლა სამშობლოს ვუწოდებ.',
  citizenshipRejection: 'თავიდან ვცდი მოქალაქეობის მიღებას',
  military:
    'არა, რადგან საცხოვრებლად გადმოვედი საქართველოში უნივერსიტეტის დამთავრებისთანავე.',
  residenceDuration: 'თითქმის ოთხი წელია ვცხოვრობ საქართველოში',
  migration:
    'საქართველოზე ბევრი კარგი მესმოდა ჩემი ქართველი მეგობრისგან, და არა მხოლოდ მისგან, რის გამოც გადავწყვიტე სტუმრობა როგორც ტურისტმა. ვიზიტის შემდეგ კი დავისახე მიზნად, რომ უნივერსიტეტის დამთავრებისთანავე გადმოვსულიყავი საქართველოში საცხოვრებლად, რადგან ვიგრძენი რომ საქართველო არის მეგობრული, თავისუფალი და უსაფრთხო ქვეყანა შესაძლებლობნებით.',
} as const

type AnswerEssence = keyof typeof answers

const answerCategoryRecord: Record<AnswerEssence, InterviewQuestionCategory> = {
  name: 'introduction',
  nameAndAge: 'introduction',
  age: 'introduction',
  language: 'language',
  placeOfBirth: 'origin',
  hometown: 'origin',
  originAndResidence: 'origin',
  university: 'education',
  universitySubject: 'education',
  universitySatisfaction: 'education',
  profession: 'work',
  job: 'work',
  jobPosition: 'work',
  employment: 'work',
  relatives: 'family',
  currentResidence: 'residence',
  realEstateOwnership: 'investment',
  readAndWrite: 'language',
  languageStatus: 'language',
  citizenshipMotivation: 'citizenship',
  citizenshipRejection: 'citizenship',
  military: 'other',
  residenceDuration: 'residence',
  migration: 'residence',
}

const questionAnswerRecord: Record<string, AnswerEssence> = {
  'რა გქვიათ?': 'name',
  'თქვენი სახელი?': 'name',
  'წარმოგვიდგინეთ თავი თუ შეიძლება.': 'nameAndAge',
  'რამდენი წლის ხართ?': 'age',
  'ქართულად საუბრობთ?': 'language',
  'შეგიძლიათ ქართულად საუბარი?': 'language',
  'სად დაიბადეთ?': 'placeOfBirth',
  'სად გაიზარდეთ?': 'hometown',
  'საიდან ხართ წარმოშობით და სად ცხოვრობდით?': 'originAndResidence',
  'სად სწავლობდით?': 'university',
  'უმაღლესი განათლება სად მიიღეთ?': 'university',
  'რომელ უნივერსიტეტში სწავლობდით?': 'university',
  'რა განხრით სწავლობდით უნივერსიტეტში?': 'universitySubject',
  'მოგწონდათ უნივერსიტეტში სწავლა?': 'universitySatisfaction',
  'რა პროფესიის ხართ?': 'profession',
  'სად მუშაობთ?': 'job',
  'რა სამუშაოს ასრულებთ?': 'job',
  'რა სამუშაო გაქვთ?': 'job',
  'რომელ კომპანიაში მუშაობთ?': 'job',
  'ახლა დასაქმებული ხართ? კონკრეტულად სად მუშაობთ?': 'employment',
  'რა თანამდებობაზე?': 'jobPosition',
  'გყავთ თუ არა ნათესავები საქართველოში?': 'relatives',
  'სად ცხოვრობთ?': 'currentResidence',
  'გაქვთ თუ არა უძრავი ქონება საქართველოში?': 'realEstateOwnership',
  'წერა-კითხვა იცით?': 'readAndWrite',
  'ქართული რატომ არ იცით კარგად?': 'languageStatus',
  'რატომ გინდათ საქართველოს მოქალაქეობის მიღება?': 'citizenshipMotivation',
  'მაინც და მაინც ახლა რატომ გადაწყვიტედ მოქალაქეობის მიღება? აქამდე ხომ მშვენივრად ცხოვრობდით.':
    'citizenshipMotivation',
  'თუ მოქალაქეობას  ახლა არ მოგანიჭებენ, მაშინ რას გააკეთებთ?':
    'citizenshipRejection',
  'თუ მოქალაქეობის შესახებ უარყოფით პასუხს მიიღებთ, მაშინ რა მოხდება?':
    'citizenshipRejection',
  'გიმსახურიათ თუ არა ჯარში?': 'military',
  'რამდენი ძანია საქართველოში სხოვლობთ?': 'residenceDuration',
  'დიდი ხანია საქართველოში სხავლობთ?': 'residenceDuration',
  'რამდენი წელია საქართველოში სხავლობთ?': 'residenceDuration',
  'რატომ გადაწყვიტეთ საქართველოში საცხოვრებლად გადმოსვლა?': 'migration',
  'რატომ გადმოხვედით საქართველოში?': 'migration',
}

export const interviewQuestions: InterviewQuestion[] = Object.entries(
  questionAnswerRecord,
).map(([question, answerEssence]) => ({
  question,
  answer: answers[answerEssence],
  category: answerCategoryRecord[answerEssence],
}))
