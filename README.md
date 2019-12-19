# osCounter

jQuery ile gelişitirilmiş CSS3 ile güçlendirilmiş arttır-azalt uygulaması.

### Özellikleri
  - Seçilen özelliklere göre değeri arttırıp-düşürür
  - Geçerli değeri alabilmek için gizli inputa name ataması yapabilme
  - Maksimum arttırma ve düşürme sınırı
  - Default değer atama
  - İstenilen miktarda arttırma - düşürme
  - Butonlara html ekleyebilme (tasarım için gerekli örneğin font-awesome ikonu kullanmak için <i class="fa fa-angle-down"></i>)
  - İki çeşit uyarı göstergesi. (alert ve osModal (yakında))
  - Uyarı metinleri tanımlayabilme
  - Arttırma ve düşürme olaylarına fonksiyon yazabilme

### Kullanımı
Boş bir elemente atadığınız class, id, data gibi attiribute lere osCounter'ı uygulamanız yeterli.

#### 1) $(?).osCounter(); Yöntemi ile
```sh
<div id="osCounter"></div>
<script>
    $(function () {
        $('#osCounter').osCounter({
            osName: "amount",
            osMaxUp: 100,
            osMaxDown: 20,
            osDefault: 40,
            osSkip: 10,
            osAlertType: "alert",
            osTextUpTitle: 'Maksimum Değer',
            osTextDownTitle: 'Minimum Değer',
            osTextUpDesc: 'Maksimum değere ulaştınız.',
            osTextDownDesc: 'Minimum değere ulaştınız.',
            osDownFunc: function (data) { alert("osDownFunc"); },
            osUpFunc: function (data) { alert("osUpFunc"); }
        });
    });
</script>
```

#### 2) data-oscounter="{?}" Yöntemi ile
```sh
<div data-oscounter="{ 'osName': 'dataCounter', 'osMaxUp': 200, 'osMaxDown': 50, 'osDefault': 60, 'osSkip': 10 }"></div>
```

### Versiyon
3.0
- Yapı değiştirildi.
- Destroy eklendi.

### Teknik
jQuery 2.1.4+ ( http://www.jquery.com )

### Kurulum
Aşağıdaki kodları &lt;head&gt; tagı içerisine yerleştirin.

```sh
<script src="jquery-2.1.4.min.js"></script>
<script src="osCounter.js"></script>
<link href="osCounter.css" rel="stylesheet" />
```

Yukarıdaki örnek kodları sitenize entegre edin ve kullanmaya başlayın.

> Teşekkürler. :)

> Oğuzhan SARI

> os@oguzhansari.com

> www.oguzhansari.com
