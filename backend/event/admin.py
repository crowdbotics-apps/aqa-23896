from django.contrib import admin
from .models import (
    Category,
    Faq,
    Favorites,
    Location,
    MySchedule,
    Presenter,
    Schedule,
    Sponsor,
    Vendor,
    VendorDetail,
)

admin.site.register(VendorDetail)
admin.site.register(Faq)
admin.site.register(Category)
admin.site.register(Presenter)
admin.site.register(Vendor)
admin.site.register(Sponsor)
admin.site.register(Favorites)
admin.site.register(Location)
admin.site.register(Schedule)
admin.site.register(MySchedule)

# Register your models here.
