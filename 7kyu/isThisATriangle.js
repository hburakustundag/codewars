function isTriangle(a,b,c)
{
  if (a > 0 && b > 0 && c > 0) {
   return a + b > c && b + c > a && a + c > b;
    }
  return false;
}
