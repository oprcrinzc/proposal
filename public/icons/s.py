import requests
import os

def download_image(url, save_path):
    try:
        # Send a GET request to the URL
        response = requests.get(url, stream=True)
        response.raise_for_status()  # Raise an exception for HTTP errors
        
        # Extract the filename from the URL
        filename = url.split("/")[-1]
        full_path = os.path.join(save_path, filename)

        # Save the image to the specified path
        with open(full_path, "wb") as file:
            for chunk in response.iter_content(1024):  # Download in chunks
                file.write(chunk)
        
        print(f"Image downloaded and saved as {full_path}")
    except requests.exceptions.RequestException as e:
        print(f"Error downloading the image: {e}")


def get_top_100():
    url = "https://api.coincap.io/v2/assets?limit=100"  # API endpoint for top 100 cryptocurrencies
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        data = response.json()
        # Extract the symbols from the response
        symbols = [crypto["symbol"] for crypto in data["data"]]
        return symbols
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return []

# Fetch the top 100 cryptocurrency symbols
#top_100_symbols = get_top_100_crypto_symbols()

# Print the list of symbols
#print("Top 100 Cryptocurrency Symbols:")
#print(top_100_symbols)


imgList = get_top_100()
genS0 = "https://assets.coincap.io/assets/icons/"
genS1 = "@2x.png"

for a in imgList:


    image_url = f"https://assets.coincap.io/assets/icons/{a.lower()}@2x.png".strip()
    save_directory = "./"  # Current directory
    download_image(image_url, save_directory)
