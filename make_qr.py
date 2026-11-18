"""Usage: python make_qr.py https://YOUR-PUBLIC-URL/   -> qr/portfolio-qr.png + qr/portfolio-qr.svg"""
import sys, os, segno
url = sys.argv[1] if len(sys.argv) > 1 else "https://nadaemad2002.github.io/nada-portfolio/"
os.makedirs("qr", exist_ok=True)
qr = segno.make(url, error=segno.consts.ERROR_LEVELS["Q"] if False else "q")
qr.save("qr/portfolio-qr.png", scale=40, border=4, dark="#0a2a66", light="#ffffff")   # high-res
qr.save("qr/portfolio-qr.svg", scale=10, border=4, dark="#0a2a66", light="#ffffff")   # vector
print("QR for:", url)
