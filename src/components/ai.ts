import { InferenceClient } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

// Create inference client without constructor parameters
const inference = new InferenceClient();

export async function getRecipeFromMistral(ingredientsArr: string[]) {
  const ingredientsString = ingredientsArr.join(", ");
  
  // Check if API key exists
  const apiKey = import.meta.env.VITE_HF_API_KEY;
  if (!apiKey) {
    throw new Error("REACT_APP_API_KEY environment variable is not set");
  }
  
  try {
    const response = await inference.chatCompletion({
      model: "openai/gpt-oss-120b",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `Generate a recipe using these ingredients: ${ingredientsString}` }
      ],
      // Pass the access token directly to the method
      accessToken: apiKey
    });
    return response;
  } catch (error) {
    console.error("Error getting recipe:", error);
    throw error;
  }
}