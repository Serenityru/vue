import Mock from 'mockjs';
export default Mock.mock({
    'province|25': [
        {
            'pid|1-100': 100,
            'name|1': '@province()',
            'city|10': [
                {
                    'name|1': '@city()',
                    'cid|1': 100
                }
            ]
        }
    ]
});