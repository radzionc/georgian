import { InterviewQuestion } from '@georgian/entities/InterviewQuestion'

export const interviewQuestions: InterviewQuestion[] = [
  {
    question: 'რა გქვიათ?',
    category: 'introduction',
    answer: 'თქვენი სახელი',
  },
  {
    question: 'თქვენი სახელი?',
    category: 'introduction',
    answer: 'თქვენი სახელი',
  },
  {
    question: 'წარმოგვიდგინეთ თავი თუ შეიძლება.',
    answer: 'მე ვარ {თქვენი სახელი}, {თქვენი ასაკი} წლის',
    category: 'introduction',
  },
  {
    question: 'რამდენი წლის ხართ?',
    answer: 'ოცდაექვსის',
    category: 'introduction',
  },
  {
    question: 'ქართულად საუბრობთ?',
    category: 'language',
    answer:
      'ქართულს ვსწავლობ. ჩემი ცოლი {სახელი} დამრხმარება თარგმანში როცა დამჭირდება',
  },
  {
    question: 'შეგიძლიათ ქართულად საუბარი?',
    answer:
      'ქართულს ვსწავლობ. ჩემი ცოლი {სახელი} დამრხმარება თარგმანში როცა დამჭირდება',
    category: 'language',
  },
  {
    question: 'სად დაიბადეთ?',
    category: 'origin',
    answer: 'ბელარუსიაში, ქალაქ სვეტლაგორსკში',
  },
  {
    question: 'საიდან ხართ წარმოშობით და სად ცხოვრობდით?',
    category: 'origin',
    answer:
      'სვეტლაგორსკიდან, ვცხოვრობდი ბელორუსიაში და თითქმის ოთხი წელია ვცხოვრობ საქართველოში',
  },
  {
    question: 'სად გაიზარდეთ?',
    category: 'origin',
    answer: 'დავიბადე და გავიზარდე სვეტლაგორსკში',
  },
  {
    question: 'სად სწავლობდით?',
    category: 'education',
    answer:
      'დავამთავრე ბელორუსიის ინფორმატიკისა და რადიოელექტრონიკის სახელმწიფო უნივერსიტეტი',
  },
  {
    question: 'უმაღლესი განათლება სად მიიღეთ?',
    category: 'education',
    answer:
      'დავამთავრე ბელორუსიის ინფორმატიკისა და რადიოელექტრონიკის სახელმწიფო უნივერსიტეტი',
  },
  {
    question: 'რომელ უნივერსიტეტში სწავლობდით?',
    category: 'education',
    answer:
      'დავამთავრე ბელორუსიის ინფორმატიკისა და რადიოელექტრონიკის სახელმწიფო უნივერსიტეტი',
  },
  {
    question: 'რა განხრით სწავლობდით უნივერსიტეტში?',
    category: 'education',
    answer: 'პროგრამირების განხრით',
  },
  {
    question: 'მოგწონდათ უნივერსიტეტში სწავლა?',
    category: 'education',
    answer: 'დიახ, საინტერესო იყო',
  },
  {
    question: 'რა პროფესიის ხართ?',
    category: 'work',
    answer: 'პროგრამისტი',
  },
  {
    question: 'სად მუშაობთ?',
    category: 'work',
    answer: 'ვმუშაობ სახლიდან პროგრამისტად ტექ კომპანიებში',
  },
  {
    question: 'რა სამუშაოს ასრულებთ?',
    category: 'work',
    answer: 'მე ვარ სოფთვეარ დეველოპერი',
  },
  {
    question: 'ახლა დასაქმებული ხართ? კონკრეტულად სად მუშაობთ?',
    category: 'work',
    answer: 'დიახ, ვმუშაობ დისტანციურად პროგრამისტად ტექ კომპანიებში',
  },
  {
    question: 'რა სამუშაო გაქვთ?',
    category: 'work',
    answer: 'ვმუშაობ დისტანციურად პროგრამისტად ტექ კომპანიებში',
  },
  {
    question: 'რომელ კომპანიაში მუშაობთ?',
    category: 'work',
    answer: 'უცხოურ ტექ კომპანიაში',
  },
  {
    question: 'რა თანამდებობაზე?',
    category: 'work',
    answer: 'სოფტვეარ დეველოპერის თანამდებობაზე',
  },
  {
    question: 'გყავთ თუ არა ნათესავები საქართველოში?',
    category: 'family',
    answer: 'დიახ, ჩემი ცოლი და მისი მშობლები',
  },
  {
    question: 'სად ცხოვრობთ?',
    category: 'residence',
    answer: 'ამჟამად, ვცხოვრობ თბილისში',
  },
  {
    question: 'გაქვთ თუ არა უძრავი ქონება საქართველოში?',
    category: 'investment',
    answer: 'დიახ, ...',
  },
  {
    question: 'წერა-კითხვა იცით?',
    category: 'language',
    answer: 'დიახ, ვიცი',
  },
  {
    question: 'ქართული რატომ არ იცით კარგად?',
    category: 'language',
    answer:
      'ქართულის სერიოზულად  სწავლა დავიწყე მხოლოდ  რვა თვის წინ. რაც საკმარისი არაა ქართული ენის კარგად შესასწავლად.',
  },
  {
    question: 'რატომ გინდათ საქართველოს მოქალაქეობის მიღება?',
    category: 'citizenship',
  },
  {
    question:
      'მაინც და მაინც ახლა რატომ გადაწყვიტედ მოქალაქეობის მიღება? აქამდე ხომ მშვენივრად ცხოვრობდით.',
    category: 'citizenship',
  },
  {
    question: 'თუ მოქალაქეობას  ახლა არ მოგანიჭებენ, მაშინ რას გააკეთებთ? ',
    category: 'citizenship',
  },
  {
    question:
      'თუ მოქალაქეობის შესახებ უარყოფით პასუხს მიიღებთ, მაშინ რა მოხდება?',
    category: 'citizenship',
  },
]
