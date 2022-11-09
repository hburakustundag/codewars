function solution(str, ending) {
  if (ending === "") return true;
  return (
    str.includes(ending) && ending[ending.length - 1] === str[str.length - 1]
  );
}
