export const formatText = (text: string): string => {
  return text
    .replace(
      /საქართველოს იუსტიციის სამინისტრო[\s\S]*?ტესტები საქართველოს მოქალაქეობის მოპოვებისათვის ქართულ ენაში/g,
      '',
    )
    .replace(
      /საქართველოს იუსტიციის სამინისტრო[\s\S]*?ტესტები საქართველოს მოქალაქეობის მოპოვებისათვის ისტორიაში/g,
      '',
    )
    .replace(
      /საქართველოს იუსტიციის სამინისტრო[\s\S]*?ტესტები საქართველოს მოქალაქეობის მოპოვებისათვის სამართლის საფუძვლებში/g,
      '',
    )
    .replace(/\n{2,}/g, '\n')
}
