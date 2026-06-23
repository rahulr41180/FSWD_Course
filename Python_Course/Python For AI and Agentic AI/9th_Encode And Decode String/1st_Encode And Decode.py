
# here we can see special has special character called  à
# so to ensure that all language should compiled so for this we have Encoded and Decoded String Method
label_text = "Chai Speciàl";
encoded_label = label_text.encode("utf-8");
print(f"Non Encoded Label: {label_text}");
print(f"Encoded Label: {encoded_label}");
# we have saved the string in same language but saved in encoded format means we can't read it 
# so for read we have to decode the encoded string by using decode method of string
decoded_label = encoded_label.decode("utf-8"); # here we have to used same encoded rule which we have used while encoding like utf-8
print(f"Decoded Label: {decoded_label}");