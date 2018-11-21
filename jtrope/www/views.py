from django.http import JsonResponse
from django.shortcuts import render_to_response


def index(request):
    return render_to_response('www/index.html')


def images(request):
    # TODO: Put in config
    images = [
        {
            'caption': 'Yellowstone Bison',
            'url': 'http://www.placecage.com/200/200',
        },
        {
            'caption': 'Thailand Street Food',
            'url': 'http://www.placecage.com/100/100',
        },
        {
            'caption': 'Malaysia Temple',
            'url': 'http://www.placecage.com/250/250',
        }
    ]
    return JsonResponse(images, safe=False)
