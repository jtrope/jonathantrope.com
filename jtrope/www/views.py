from django.http import HttpResponse, JsonResponse


def index(request):
    return HttpResponse("Hello, world. You're at the www index.")


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
            'caption': 'Malaysia Template',
            'url': 'http://www.placecage.com/250/250',
        }
    ]
    return JsonResponse(images, safe=False)
