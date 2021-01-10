# 資料庫架構

### food (美食趨勢分析)
```json
{

}
```
### activity (活動趨勢分析)
```json
{

}
```
### purchase (購物趨勢分析)
```json
{

}
```
### member (會員基本資料)
```json
{
    "userId": "A1232123123", // 資料庫會員編碼
    "lineId": "123123", //line ID
    "name": "阿豪", // 姓名
    "gender": "male", // 性別
    "idNumber": "H124555555", // 身分證號碼
    "email": "nick@ibm.com", // 電子信箱
    "phone": "0907705916", // 電話
    "LicensePlate": "XXXX-XXXX", //車牌號碼
    "customerCategory": "A", // 客群分類
    "totalAmtYear": "40000", // 年度消費金額
    "messageList": [{ 

    }],
    "analticsTagList": [
        "經典款式", "日式食物"
    ], // 分析後的標籤(形容喜好等等)
    "purchaseList": [{
        "name": "手錶",
        "category": "飾品",
        "price": "40000",
        "tag": ["經典款式"],
        "time": "2020/12/22 14:50",
        "activity": ["週年慶"],
    }, 
    {
        "name": "拉麵",
        "category": "食物",
        "price": "100",
        "tag": ["日式"],
        "time": "2020/12/22 15:50",
        "activity": [],
    }],
}
```
## `要在line活動的資料`
### 趨勢推薦
```json
{
    "trendsList": [{
        "name": "聖誕禮物推薦", // 趨勢名稱
        "item": [{
            "name": "聖誕樹" // 物品名稱
        }, 
        {
            "name": "聖誕襪"
        }]
    },
    {
        "name": "美食餐廳推薦"
    }]
}
```
### 預約鑑賞的步驟(line bot的對話情境)
### 目前活動
```json
{
    "activityList": [{
        "name": "珠寶展", // 活動名稱
        "startDate": "2020/12/2", // 活動起日
        "endDate": "2020/12/22", // 活動迄日
        "content": "本次珠寶展.....", // 活動詳情
        "url": "http://", // 活動網址連結
        "invitedId": [], // 已邀請名單
        "acceptedId": [], // 確認參加名單
        "actualComingId": [], // 辦完活動, 真的有來參加的名單
    },
    {

    }]
}
```

## 列一下最難的東西
* line串接
