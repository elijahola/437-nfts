# API Base Url:

http://54.86.150.173:3001

# Endpoints:

## GET /posts
  Parameters:
  ```
  None
  ```
    
  Return value:
  ```
    [
      {
          "post_id": 1,
          "author_wallet_address": "0x123...",
          "title": "test title 1",
          "body": "test body 1",
          "link": "testlink1.com",
          "date_created": "2022-04-03T02:28:29.000Z"
      },
      {
        ...
      }
  ]
  ```

## POST /posts
  Description:
  ```
  Create a post
  ```
  
  Parameters:
  ```
  String authorWalletAddress // Address of post creator (current user)
  String title
  String body
  String link
  ```
    
  Return value:
  ```
    [
      {
          "post_id": 1,
          "author_wallet_address": "0x123...",
          "title": "test title 1",
          "body": "test body 1",
          "link": "testlink1.com",
          "date_created": "2022-04-03T02:28:29.000Z"
      },
      {
        ...
      }
  ]
  ```

## POST /fetch_comments
  Description:
  ```
  Retrieve all comments for a post
  ```
  
  Parameters:
  ```
  int PostId // PostId of the post from which you want to fetch comments
  ```
    
  Return value:
  ```
    [
      {
          "post_id": 1,
          "author_wallet_address": "0x123...",
          "title": "test title 1",
          "body": "test body 1",
          "link": "testlink1.com",
          "date_created": "2022-04-03T02:28:29.000Z"
      },
      {
        ...
      }
  ]
  ```

## POST /create_comment
  Description:
  ```
  Create a comment on a particular post
  ```
  
  Parameters:
  ```
  int PostId // PostId of the post on which you want to add the comment
  ```
    
  Return value:
  ```
    {
      "success": true // true or false,
      "error": {} // no error will be empty object
    }
  ```

## POST /follow
  Description:
  ```
  Create a comment on a particular post
  ```
  
  Parameters:
  ```
  int followeeWalletAddress // Wallet address of current user
  int followerWalletAddress // Wallet address of the user that the current user wants to follow
  ```
    
  Return value:
  ```
    {
      "success": true // true or false,
      "error": {} // no error will be empty object
    }
  ```

## POST /unfollow
  Description:
  ```
  Unfollow a user
  ```
  
  Parameters:
  ```
  int followeeWalletAddress // Wallet address of current user
  int followerWalletAddress // Wallet address of the user that the current user wants to unfollow
  ```
    
  Return value:
  ```
    {
      success: true // true or false,
      error: {} // no error will be empty object
    }
 ```

## POST /followers
  Description:
  ```
  Get all followers for a user
  ```
  
  Parameters:
  ```
  String followeeWalletAddress // Wallet address of user from which you wish to retrieve followers
  ```
    
  Return value:
  ```
  [
      {
          "follower_wallet_address": "0x1234...",
          "followee_wallet_address": "0x5678..."
      }
  ]
```
