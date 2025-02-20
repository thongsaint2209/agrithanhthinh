export const capitalizeFirstLetter = (string: string) => {
  if (!string) return;
  const words = string.toLowerCase().split("_");
  const titleCase = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return titleCase.join(" ");
};
