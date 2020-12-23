# -*- coding: utf-8 -*-
#!/usr/bin python3

import requests
import json

URL = 'http://www.jianshu.com/u/fa8de22b462e'
query = '?order_by=shared_at&page='
page = 1

def getJson():
    global page
    headers = {
    'Accept':'application/json',
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
    }
    res = requests.get(URL+query+str(page),headers=headers)
    j = json.loads(res.text)
    totalPage = j['total_pages']
    page = j['page']
    with open("page/"+str(page)+".html","w") as f:
        f.write(res.text)

    for i in j['notes']:
        with open("page/"+i['slug']+".html","w") as f:
            res = requests.get("http://www.jianshu.com/p/"+i['slug'],headers=headers)
            f.write(res.text)

    if page < totalPage:
        page = page + 1
        getJson()

getJson()
