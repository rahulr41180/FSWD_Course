
is_boolean = True;
stri_count = 5;

# is_boolean is return also 1 for True so if we add is_boolean with some integer value then it will give me updated value and
# we called this upcasting
total_stri_count_with_is_boolean_v1 = stri_count + is_boolean;
total_stri_count_with_is_boolean_v2 = is_boolean + stri_count
print(total_stri_count_with_is_boolean_v1)
print(total_stri_count_with_is_boolean_v2)

# to check type we do use bool

print(bool(False));
print(bool(10));
print(bool('abcd'));
print(bool("abcd"));
print(bool(None));
print(bool(is_boolean));