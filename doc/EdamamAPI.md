Here is the complete, comprehensive specification data for the **`GET /api/recipes/v2`** endpoint from the [Edamam Recipe Search API Documentation](https://developer.edamam.com/edamam-docs-recipe-api).

## 1. Base URL & Authentication

-   **Access Point URL:** `https://api.edamam.com/api/recipes/v2`
    
-   **Method:** `GET`
    
-   **Protocol:** `HTTPS`
    
-   **Compression:** Supports standard HTTP compression using gzip (`Accept-Encoding: gzip`).
    
-   **Required Headers:** * `accept: application/json`
    
    -   `Accept-Language: en` (Defaults to English, or your preferred language token)
        
    -   `app_id`: Your 3scale Application ID (Passed as query param or auth header)
        
    -   `app_key`: Your 3scale Application Key (Passed as query param or auth header)
        

## 2. Complete Query Parameters

### Core Parameters

**Parameter**

**Type**

**Required / Optional**

**Description**

**`type`**

`array[string]`

**REQUIRED**

Type of recipes to search for. Enumerated values: `public`, `user`, `edamam-generic`. Passing `any` acts as a wildcard for all types to maintain backward compatibility.

**`q`**

`string`

**Conditional**

Query text (e.g., `"chicken"`). **Required if no other filter parameter is specified.** Optional if other nutrient/diet filters are present.

**`beta`**

`boolean`

Optional

Set to `true` to enable beta features (like the CO2 footprint classification) in requests and responses.

### Search & Index Filters

**Parameter**

**Type**

**Description**

**`ingr`**

`string`

Filter by number of ingredients using ranges: `MIN+`, `MIN-MAX`, or `MAX`. (Example: `ingr=5-8` or `ingr=5%2B`).

**`diet`**

`array[string]`

Filter by diet label: `balanced`, `high-fiber`, `high-protein`, `low-carb`, `low-fat`, `low-sodium`.

**`health`**

`array[string]`

Filter by allergen/health labels. Options include: `alcohol-cocktail`, `alcohol-free`, `celery-free`, `crustacean-free`, `dairy-free`, `DASH`, `egg-free`, `fish-free`, `fodmap-free`, `gluten-free`, `immuno-supportive`, `keto-friendly`, `kidney-friendly`, `kosher`, `low-fat-abs`, `low-potassium`, `low-sugar`, `lupine-free`, `Mediterranean`, `mollusk-free`, `mustard-free`, `no-oil-added`, `paleo`, `peanut-free`, `pescatarian`, `pork-free`, `red-meat-free`, `sesame-free`, `shellfish-free`, `soy-free`, `sugar-conscious`, `sulfite-free`, `tree-nut-free`, `vegan`, `vegetarian`, `wheat-free`.

**`cuisineType`**

`array[string]`

Options: `American`, `Asian`, `British`, `Caribbean`, `Central Europe`, `Chinese`, `Eastern Europe`, `French`, `Greek`, `Indian`, `Italian`, `Japanese`, `Korean`, `Kosher`, `Mediterranean`, `Mexican`, `Middle Eastern`, `Nordic`, `South American`, `South East Asian`.

**`mealType`**

`array[string]`

Options: `Breakfast`, `Dinner`, `Lunch`, `Snack`, `Teatime`.

**`dishType`**

`array[string]`

Options: `Biscuits and cookies`, `Bread`, `Cereals`, `Condiments and sauces`, `Desserts`, `Drinks`, `Main course`, `Pancake`, `Preps`, `Preserve`, `Salad`, `Sandwiches`, `Side dish`, `Soup`, `Starter`, `Sweets`.

**`calories`**

`string`

Floating-point range of kcal per serving: `MIN+`, `MIN-MAX`, `MAX`. (Example: `calories=100-300`).

**`time`**

`string`

Cooking/prep time range in minutes: `MIN+`, `MIN-MAX`, `MAX`. (Example: `time=1%2B` for > 1 minute).

**`imageSize`**

`array[string]`

Filters for recipes containing specific image aspect structures: `LARGE`, `REGULAR`, `SMALL`, `THUMBNAIL`.

**`glycemicIndex`**

`string`

Float range to filter by glycemic index impact.

**`inflammatoryIndex`**

`string`

Float range to filter by diet inflammatory index.

**`excluded`**

`array[string]`

Exclude ingredients. Repeating keys allows multiple exclusions (e.g., `excluded=vinegar&excluded=pretzel`).

**`random`**

`boolean`

Set to `true` to randomize the response sequence (returns a random batch of up to 20 matching items).

**`field`**

`array[string]`

Target payloads for response optimization. Limits returned properties to specified elements (e.g., `field=uri&field=label`).

**`co2EmissionsClass`**

`string`

Environmental footprint threshold (Requires `beta=true`). Options: `A+`, `A`, `B`, `C`, `D`, `E`, `F`, `G`.

**`tag`** / **`sysTag`**

`array[string]`

Optional tagging filters (e.g., `sysTag=live`). Subject to tier restrictions.

### Target Nutrient Filters

You can append nutrient codes directly to your query using the format **`nutrients[CODE]=RANGE`** (e.g., `nutrients[FAT]=30` for $\le 30\text{g}$, or `nutrients[CA]=50%2B` for $\ge 50\text{mg}$).

-   **`CA`** (Calcium, mg)
    
-   **`CHOCDF`** (Carbs by difference, g)
    
-   **`CHOCDF.net`** (Net Carbs, g)
    
-   **`CHOLE`** (Cholesterol, mg)
    
-   **`ENERC_KCAL`** (Energy, kcal)
    
-   **`FAMS`** (Monounsaturated Fat, g)
    
-   **`FAPU`** (Polyunsaturated Fat, g)
    
-   **`FASAT`** (Saturated Fat, g)
    
-   **`FAT`** (Total Lipid Fat, g)
    
-   **`FATRN`** (Trans Fat, g)
    
-   **`FE`** (Iron, mg)
    
-   **`FIBTG`** (Dietary Fiber, g)
    
-   **`FOLAC`** (Folic acid, µg)
    
-   **`FOLDFE`** (Folate DFE, µg)
    
-   **`FOLFD`** (Food Folate, µg)
    
-   **`K`** (Potassium, mg)
    
-   **`MG`** (Magnesium, mg)
    
-   **`NA`** (Sodium, Na, mg)
    
-   **`NIA`** (Niacin, mg)
    
-   **`P`** (Phosphorus, mg)
    
-   **`PROCNT`** (Protein, g)
    
-   **`RIBF`** (Riboflavin, mg)
    
-   **`SUGAR`** (Total Sugars, g)
    
-   **`SUGAR.added`** (Added Sugar, g)
    
-   **`Sugar.alcohol`** (Sugar Alcohols, g)
    
-   **`THIA`** (Thiamin, mg)
    
-   **`TOCPHA`** (Vitamin E, mg)
    
-   **`VITA_RAE`** (Vitamin A, µg)
    
-   **`VITB12`** (Vitamin B12, µg)
    
-   **`VITB6A`** (Vitamin B6, mg)
    
-   **`VITC`** (Vitamin C, mg)
    
-   **`VITD`** (Vitamin D, µg)
    
-   **`VITK1`** (Vitamin K, µg)
    
-   **`WATER`** (Water composition weight, g)
    
-   **`ZN`** (Zinc, mg)
    

## 3. Complete JSON Response Schema (`200 OK`)

When the criteria match successfully, the endpoint returns the full payload structured below:

JSON

```
{
  "from": 0,
  "to": 0,
  "count": 0,
  "_links": {
    "self": {
      "href": "string",
      "title": "string"
    },
    "next": {
      "href": "string",
      "title": "string"
    }
  },
  "hits": [
    {
      "recipe": {
        "uri": "string",
        "label": "string",
        "image": "string",
        "images": {
          "THUMBNAIL": { "url": "string", "width": 0, "height": 0 },
          "SMALL": { "url": "string", "width": 0, "height": 0 },
          "REGULAR": { "url": "string", "width": 0, "height": 0 },
          "LARGE": { "url": "string", "width": 0, "height": 0 }
        },
        "source": "string",
        "url": "string",
        "shareAs": "string",
        "yield": 0,
        "dietLabels": ["string"],
        "healthLabels": ["string"],
        "cautions": ["string"],
        "ingredientLines": ["string"],
        "ingredients": [
          {
            "text": "string",
            "quantity": 0,
            "measure": "string",
            "food": "string",
            "weight": 0,
            "foodId": "string",
            "foodCategory": "string"
          }
        ],
        "calories": 0,
        "glycemicIndex": 0,
        "inflammatoryIndex": 0,
        "totalCO2Emissions": 0,
        "co2EmissionsClass": "A+",
        "totalWeight": 0,
        "cuisineType": ["string"],
        "mealType": ["string"],
        "dishType": ["string"],
        "instructionLines": ["string"],
        "tags": ["string"],
        "externalId": "string",
        "totalNutrients": {
          "additionalProp1": { "label": "string", "quantity": 0, "unit": "string" }
        },
        "totalDaily": {
          "additionalProp1": { "label": "string", "quantity": 0, "unit": "string" }
        },
        "digest": [
          {
            "label": "string",
            "tag": "string",
            "schemaOrgTag": "string",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "string",
            "sub": "string"
          }
        ]
      },
      "_links": {
        "self": { "href": "string", "title": "string" },
        "next": { "href": "string", "title": "string" }
      }
    }
  ]
}

```

## 4. Error Codes & Payloads

### `400 Bad Request` or `403 Forbidden` Payload

Returned if parameters conflict, formatting constraints are broken, or subscription restrictions block advanced arrays (like specific `sysTag` values).

JSON

```
[
  {
    "errorCode": "string",
    "message": "string",
    "params": ["string"]
  }
]

```

### `401 Unauthorized` Payload

Returned when credentials (`app_id` / `app_key`) fail validation or are omitted.

JSON

```
{
  "status": "error",
  "message": "Unauthorized"
}

```