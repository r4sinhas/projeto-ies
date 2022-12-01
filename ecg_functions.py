import scipy
import scipy.signal as sig
import matplotlib.pyplot as pylab
rr = [1.0, 1.0, 0.5, 1.5, 1.0, 1.0] # rr time in seconds
fs = 500.0 # sampling rate
pqrst = sig.wavelets.daub(10) # just to simulate a signal, whatever
ecg = scipy.concatenate([sig.resample(pqrst, int(r*fs)) for r in rr])
t = scipy.arange(len(ecg))/fs
pylab.plot(t, ecg)
pylab.show()