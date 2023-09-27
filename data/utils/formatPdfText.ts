export const formatPdfText = (text: string): string => {
  const regex =
    /საქართველოს იუსტიციის სამინისტრო[\s\S]*?ტესტები საქართველოს მოქალაქეობის მოპოვებისათვის ქართულ ენაში/g

  return text.replace(regex, '').replace(/\n{2,}/g, '\n')
}
