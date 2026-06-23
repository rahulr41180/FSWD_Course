
sugar_amount = 2;
print(f"Initial Sugar: {sugar_amount}");

# Here we haven't change the value of sugar_amount we changed the reference of sugar_amount 
# because number is immutable we can't changed the number but we can change the reference of variable to different number reference 
# means 2 is in memory but we created 12 in memory with new reference and now sugar_amount is refrensing to 12 value reference not 2 value.
# so here we have check with indentity not with value
sugar_amount = 12;
print(f"Second Initial Sugar: {sugar_amount}");

# to find the indentity of sugar_amount for different value

print(f"Id of 2: {id(2)}");
print(f"Id of 12: {id(12)}");