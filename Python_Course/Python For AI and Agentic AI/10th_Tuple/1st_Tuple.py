
# Tuple are immutable and we difined it by ()
masala_spices = ("cardamom", "cloves", "cinnamon");

(spice1, spice2, spice3) = masala_spices;

print(f"spice1 : {spice1}, spice2 : {spice2}, spice3 : {spice3}")

# -------------------------------------------------

# we can also do like this means might be in behind it do same like ('2', '1')
ginger_ratio, cadramom_ratio = 2, 1;

print(f"Ratio is G : {ginger_ratio} and C: {cadramom_ratio}");

# ----------------------------------------------
# we can swipe them like

ginger_ratio, cadramom_ratio = cadramom_ratio, ginger_ratio;
print(f"Ratio is G : {ginger_ratio} and C: {cadramom_ratio}");