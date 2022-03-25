def getURL():
    url_http = dict()
    url = open('file__obtention__webpage.url','r').read().split()
    for line in url:
        if line.startswith('URL'):
            line = line.split("=")
            url_http[line[0]] = url_http.get(line[0],line[1])
            return url_http['URL']