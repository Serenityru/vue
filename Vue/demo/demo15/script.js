var template, data;
template = {
    'data|1-10': [{
            'id|+1': 1,
            'grade1|1-100': 1,
            'grade2|90-100': 1,
            'float1|.1-10': 10,
            'float2|1-100.1-10': 1,
            'float3|999.1-10': 1,
            'float4|.3-10': 123.123,
            'star|1-5': '★',
            'cn|1-5': '汉字',
            'repeat|10': 'A',
            'published|1': false,
            'email': '@EMAIL',
            'date': '@DATE',
            'time': '@TIME',
            'datetime': '@DATETIME',
            'method|1': ['GET', 'POST', 'HEAD', 'DELETE'],
            'size': '@AD_SIZE',
            'img1': '@IMG(200x200)',
            'img2': '@IMG',
            'img3': '@IMG(@size)',
            'img4': '@IMG(@AD_SIZE)',
            'dummyimage': {
                'size': '@AD_SIZE',
                'background': '@COLOR',
                'foreground': '@COLOR',
                'format|1': ['png', 'gif', 'jpg'],
                'text': '@WORD',
                'url': 'http://dummyimage.com/@size/@background/@foreground.@format&text=@text',
            },
            'param': 'abc=123',
            'url1': '@img3?@param',
            'url2': '@img4?@ID&id=@id'
        }
    ]
}

data = Mock.mock(template)

$('<pre>').text(JSON.stringify(data, null, 4))
    .appendTo('body')