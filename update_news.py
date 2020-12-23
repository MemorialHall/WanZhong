# -*- coding: utf-8 -*-
#!/usr/bin/env python
import sys
reload(sys)
sys.setdefaultencoding('utf8')
import requests
import json

URL = 'http://www.jianshu.com/u/fa8de22b462e'
query = '?order_by=shared_at&page='
page = 1

def getJson():
    global page
    headers = {
    'Accept':'application/json'
    }
    res = requests.get(URL+query+str(page),headers=headers)
    j = json.loads(res.text)
    totalPage = j['total_pages']
    page = j['page']
    f = open("page/"+str(page)+".html","w")
    f.write(res.text)
    f.close()

    for i in j['notes']:
        f = open("page/"+i['slug']+".html","w")
        res = requests.get("http://www.jianshu.com/p/"+i['slug'])
        f.write(res.text)
        f.close()

    if page < totalPage:
        page = page + 1
        getJson()

getJson()
