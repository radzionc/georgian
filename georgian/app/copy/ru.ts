// This file is generated by app/copy/codegen/utils/generateCopy.ts
import { Copy } from './Copy'

import { injectVariables } from '@lib/utils/template/injectVariables'

const ruCopy: Copy = {
  introduction: `Введение`,
  education: `Образование`,
  origin: `Источник`,
  work: `Работа`,
  residence: `Резиденция`,
  citizenship: `Гражданство`,
  family: `Семья`,
  homePageMetaTagTitle: `Подготовка к экзамену на гражданство Грузии: руководства по языку, праву, истории и практические тесты`,
  homePageTitle: `Сдайте экзамен на гражданство Грузии уверенно!`,
  homePageSubTitle: `Овладейте билетами по языку, праву и истории`,
  getStarted: `Начать`,
  language: `Язык`,
  law: `Закон`,
  getInTouch: `Свяжитесь с нами`,
  interview: `Интервью`,
  interviewQuestionsPageTitle: `Основные вопросы для собеседования на получение гражданства Грузии`,
  interviewQuestionsPageSubTitle: `Изучите тщательно подобранный список потенциальных вопросов с примерами ответов и аудиозаписями, чтобы уверенно подготовиться к собеседованию на получение гражданства Грузии.`,
  interviewQuestionPageMetaTagTitle: `Руководство по вопросам на собеседовании на получение гражданства Грузии | Готовьтесь к успеху`,
  interviewQuestionPageMetaTagDescription: `Освойте вопросы собеседования на получение гражданства Грузии с помощью нашего подробного руководства. Получите советы экспертов, примеры ответов и уверенно подготовьтесь к собеседованию.`,
  history: `История`,
  georgian: `грузинский`,
  restart: `Перезапуск`,
  languageTicketsTitle: `Билеты по грузинскому языку`,
  lawTicketsTitle: `Билеты по грузинскому праву`,
  historyTicketsTitle: `Билеты по истории Грузии`,
  languageTestPageTitle: `Тест по грузинскому языку`,
  lawTestPageTitle: `Тест по грузинскому праву`,
  historyTestPageTitle: `Тест по истории Грузии`,
  startTest: `Начать тест`,
  markAsLearned: `отметить как изученное`,
  learned: `Научился`,
  allTickets: `Все билеты`,
  completedTickets: `Завершенные билеты`,
  testPassed: `Вы прошли испытание!`,
  testFailed: `Вы провалили тест :(`,
  markTest: `Просмотреть этот вопрос после теста`,
  testCongratulation: (variables: { percentage: string }) =>
    injectVariables(
      `Поздравляем! Вы преодолели отметку в {{percentage}}! 🎉 Продолжайте в том же духе!`,
      variables,
    ),
  scoreToPass: (variables: { percentage: string }) =>
    injectVariables(
      `Наберите {{percentage}} или больше, чтобы пройти!`,
      variables,
    ),
  completedTicketsTestMin: (variables: { count: string }) =>
    injectVariables(
      `Чтобы пройти этот тест, вам необходимо отметить как выполненные как минимум {{count}} билетов.`,
      variables,
    ),
  homePageMetaTagDescription: `Получите превосходный результат на экзамене на гражданство Грузии с помощью наших комплексных учебных пособий, практических тестов и ресурсов, специально разработанных для достижения успеха в языке, праве и истории. Начните готовиться сегодня!`,
  categoryPageMetaTagTitle: (variables: { category: string }) =>
    injectVariables(
      `Подготовьтесь к экзамену на получение гражданства Грузии {{category}}: билеты на {{category}} и практические тесты`,
      variables,
    ),
  categoryPageMetaTagDescription: (variables: { category: string }) =>
    injectVariables(
      `Сдайте экзамен на получение гражданства Грузии {{category}} на отлично с нашими подробными учебными пособиями, практическими тестами и ресурсами, специально разработанными для достижения успеха в {{category}}. Начните готовиться сегодня!`,
      variables,
    ),
  categoryTestPageMetaTagTitle: (variables: { category: string }) =>
    injectVariables(
      `Проверьте свои знания по экзамену на грузинское гражданство {{category}}`,
      variables,
    ),
  categoryTestPageMetaTagDescription: (variables: { category: string }) =>
    injectVariables(
      `Проверьте свои знания на экзамене по гражданству Грузии {{category}} с помощью наших практических тестов {{category}}. Начните готовиться сегодня!`,
      variables,
    ),
}

export default ruCopy
