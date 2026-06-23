
# slice => [firstIndex:LastWordIndex:skipValue]
# [0:8] it will not take 8th index means it will end at 7th index
# [:8] start always from 0 and end at 7 as we know 8th will not include
# [12:] start from 12 and take all value till end as we didn't not mentioned end index
# [0:8:1] start from 0 and take always 1st character
# [0:8:2] start from 0 and further take 2nd character
# [::-1] it will rotate the array  
chai_description = 'Aromatic and Bold';
print(f"first word: {chai_description[0:8]}");
print(f"first word: {chai_description[12:]}");
print(f"first word: {chai_description[:8]}");
print(f"first word: {chai_description[0:8:1]}");
print(f"first word: {chai_description[0:8:2]}");
print(f"first word: {chai_description[::-1]}");