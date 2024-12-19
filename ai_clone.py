
import openai
import re

# Set your OpenAI API key
openai.api_key = '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'

def fetch_twitter_data(user_profile):
    """
    A function to simulate fetching user's tweets and bio for AI training.
    This can be replaced with an actual Twitter API integration.
    """
    user_data = {
        "bio": "Tech Enthusiast, AI Advocate, Blockchain Expert.",
        "tweets": [
            "Just discovered the power of AI for personalized experiences!",
            "Blockchain is the future. #TechTalk",
            "Loving the community feedback on AI developments."
        ]
    }
    return user_data

def generate_conversation(prompt):
    """
    Generate conversation using GPT model based on the given prompt.
    """
    response = openai.Completion.create(
        engine="gpt-4o-mini",  # Use the latest model available in OpenAI
        prompt=prompt,
        max_tokens=150
    )
    return response.choices[0].text.strip()

def create_clone(user_profile):
    """
    Create a personalized AI clone prompt based on Twitter profile data.
    """
    user_data = fetch_twitter_data(user_profile)
    prompt = f"Create a conversation where the AI clone mimics the following personality traits based on these details:\nBio: {user_data['bio']}\nTweets: {user_data['tweets']}\nUser input: "
    return prompt

# Example usage
if __name__ == "__main__":
    user_profile = "example_twitter_user"  # This should be replaced with an actual Twitter handle
    prompt = create_clone(user_profile)
    response = generate_conversation(prompt)
    print("AI Clone Response:", response)
