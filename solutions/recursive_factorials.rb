def factorial_recursion(n, factorial = 1)
  return factorial if n == 1
  factorial *= (n)
  factorial(n-1, factorial)
end
 
puts factorial_recursion(5)
 
#Run it at CodePad.org