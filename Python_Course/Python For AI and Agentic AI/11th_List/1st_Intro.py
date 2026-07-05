
ingredients = ["water", "milk", "black tea", "water"];
ingredients.append('sugar');
print(f"Ingredients are: {ingredients}");

ingredients.remove("water");
print(f"Ingredients are removed: {ingredients}");

spice_options = ["ginger", "cardamom"];
chai_ingredients = ["water", 'milk'];

chai_ingredients.extend(spice_options);
print(f"chai ingredients: {chai_ingredients}");
chai_ingredients.insert(2, "black tea");
print(f"chai ingredients with black tea: {chai_ingredients}");

# If we haven't provide any index to pop then it remove the element from last index
pop_last_added = chai_ingredients.pop();
print(f"pop last added: {pop_last_added}");
print(f"pop last added: {chai_ingredients}");
reverse_chai_ingredients = chai_ingredients.reverse();
print(f"reverse_chai_ingredients: {chai_ingredients}"); # we got reversed array
print(f"pop last added: {chai_ingredients.reverse()}"); # none
print(f"reverse_chai_ingredients: {reverse_chai_ingredients}"); # none
print(f"reverse_chai_ingredients: {chai_ingredients}"); # we will not got reversed array

chai_ingredients.sort()
print(f"reverse_chai_ingredients: {chai_ingredients}");

sugar_levels = [1,2,3,4,5];
print(f"max sugar: {max(sugar_levels)}");
print(f"min sugar: {min(sugar_levels)}");
